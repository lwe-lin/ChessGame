//! Game project.

pub mod checkerboard;
pub mod ui_components;

use rand;
use rand::rngs::ThreadRng;

#[allow(unused_imports)]
use fyrox::{
    event::Event,
    plugin::{
        error::GameResult,
        Plugin,
        PluginContext,
        PluginRegistrationContext
    },
    core::{
        pool::Handle,
        reflect::{
            prelude::*,
            Reflect,
        },
        visitor::{
            prelude::*,
            Visit,
        },
        color::Color,
        algebra::Vector2,
        log::Log,
    },
    gui::{
        button::{
            Button,
            ButtonMessage,
            ButtonBuilder,
        },
        message::UiMessage,
        UiNode,
        UserInterface,
        BuildContext,
        text::TextBuilder,
        widget::WidgetBuilder,
        brush::Brush,
        font::Font,
        HorizontalAlignment,
        Thickness,
        VerticalAlignment,
        grid::{
            Grid,
            GridBuilder,
            GridDimension
        },
        border::BorderBuilder,
    },
    graph::prelude::*,
    event::WindowEvent,
};

use crate::checkerboard::Checkerboard;
use crate::ui_components::UiComponents;
use rand::RngExt;

// Re-export the engine.
pub use fyrox;

#[derive(Default, Visit, Reflect, Debug)]
#[reflect(non_cloneable)]
pub struct Game {
    loaded: bool,
    home_root: Handle<Grid>,
    main_ui: Handle<UserInterface>,
    last_time_ui: Option<Handle<UserInterface>>,
    grid: Handle<UiNode>,
    exit_button: Option<Handle<Button>>,
    #[reflect(hidden)]
    #[visit(skip)]
    main_checkerboard: Option<Checkerboard>,
    #[reflect(hidden)]
    #[visit(skip)]
    rand: ThreadRng,
    level_buttons: Option<Vec<Handle<Button>>>,
}

impl Game {
    fn load_ui(&mut self, path: &str, context: &mut PluginContext) -> () {
        if self.main_ui.is_some() {
            self.last_time_ui = Some(self.main_ui);
        }

        context.load_ui(path, move |result, game: &mut Game, ctx| {
            game.main_ui = ctx.user_interfaces.add(result?.payload);

            game.level_buttons = None;
            Ok(())
        });
    }

    // 關卡場景組件，為了確保所有創建過程都在自己的掌控，所以被迫選擇所有都由自己透過程式碼創建
    fn level(&mut self, size: usize, ctx: &mut PluginContext) -> Result<(), String>{
        // 退出按鈕
        let exit_button = UiComponents::button(ctx, "Exit", "退出", 100f32, 50f32);

        // 儲存退出按鈕的 Handle
        self.exit_button = Some(exit_button);

        // 標題
        let title = UiComponents::title(ctx, "智能五色棋", 100f32);

        let bottom = BorderBuilder::new(
            WidgetBuilder::new()
                .with_width(350f32)
                .with_height(350f32)
                .with_margin(Thickness{
                    top: 150f32,
                    left: 0f32,
                    right: 0f32,
                    bottom: 0f32,
                })
                .with_background(Brush::Solid(Color::BLACK).into())
        ).build(&mut ctx.user_interfaces.first_mut().build_ctx());

        let (checkerboard, checkerboard_grid) = Checkerboard::init(size * 3, ctx);
        self.main_checkerboard = Some(checkerboard);

        let root_widget = WidgetBuilder::new().with_child(exit_button).with_child(title).with_child(bottom).with_child(checkerboard_grid);
        self.home_root = GridBuilder::new(root_widget).add_row(GridDimension::stretch()).add_column(GridDimension::stretch()).build(&mut ctx.user_interfaces.first_mut().build_ctx());
        Ok(())
    }

    fn random_level(&mut self, number: usize, context: &mut PluginContext){
        if let Some(checkerboard) = &mut self.main_checkerboard {
            for _i in 0..number {
                let button_name = checkerboard.id_to_name(self.rand.random_range(0..checkerboard.size/3*4));
                checkerboard.move_one_step(button_name.as_str());
            }
            checkerboard.update_color(context);
        }
    }
}

impl Plugin for Game {
    fn register(&self, _context: PluginRegistrationContext) -> GameResult {
        // Register your scripts here.
        Ok(())
    }

    fn init(&mut self, scene_path: Option<&str>, mut context: PluginContext) -> GameResult {
        // self.landed = false;
        self.level_buttons = None;

        context.resource_manager.request::<Font>("data/fonts/Noto_Sans_TC/static/NotoSansTC-Bold.ttf");

        context.load_scene_or_ui::<Self>(scene_path.unwrap_or("data/scenes.rgs"));
        self.load_ui("data/scenes/main.ui", &mut context);
        self.rand = rand::rng();
        Ok(())
    }

    fn on_deinit(&mut self, _context: PluginContext) -> GameResult {
        // Do a cleanup here.
        Ok(())
    }

    fn update(&mut self, context: &mut PluginContext) -> GameResult {
        // Add your global update code here.
        if let Some(last_time_ui) = self.last_time_ui {
            context.user_interfaces.remove(last_time_ui);
            self.last_time_ui = None;
        }
        Ok(())
    }

    fn on_os_event(&mut self, _event: &Event<()>, _context: PluginContext) -> GameResult {
        // Do something on OS event here.
        Ok(())
    }

    fn on_ui_message(
        &mut self,
        context: &mut PluginContext,
        message: &UiMessage,
        _ui_handle: Handle<UserInterface>,
    ) -> GameResult {
        // Handle UI events here.

        if self.level_buttons == None{
            self.level_buttons = Some(UiComponents::level(context, 2));
            if let Some(level_buttons) = &self.level_buttons {
                for i in 0..level_buttons.len() {
                    if let Some((level, ..)) = context.user_interfaces.first().find_by_name_from_root("Level") {
                        context.user_interfaces.first_mut().link_nodes(level_buttons[i], level, false);
                    }
                }
            }
        }

        // 如果不是按鈕點擊事件則直接回傳
        let Some(ButtonMessage::Click) = message.data() else {
            return Ok(());
        };

        // 緩存 message.destination() 的結果
        let destination = message.destination();
        if let Some((level1, ..)) = context
            .user_interfaces
            .first()
            .find_by_name_from_root("Level0")
        {
            if destination == level1 {
                let Some((main, ..)) = context.user_interfaces.first().find_by_name_from_root("main") else { return  Ok(()); };
                context.user_interfaces.first_mut().remove_node(main);
                let _ = self.level(2, context);
                self.random_level(3, context);
            }
        }

        if let Some(exit) = self.exit_button {
            if destination == exit
            {
                if let Some(checkerboard) = &self.main_checkerboard {
                    checkerboard.drop(context);
                    self.main_checkerboard = None;
                }

                self.load_ui("data/scenes/main.ui", context);
            }

            if destination != exit {
                if let Some(checkerboard) = &mut self.main_checkerboard {
                    if let Ok(button) = context.user_interfaces.first().try_get_node(destination) {
                        checkerboard.move_one_step(button.cast::<Button>().unwrap().name());
                        checkerboard.update_color(context);
                        if checkerboard.is_win() {
                            Log::info("過關");
                        }
                    }
                }
            }
        }

        Ok(())
    }
}
