//! Game project.

pub mod checkerboard;

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
        reflect::prelude::*,
        visitor::prelude::*,
        color::Color,
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
        }
    },
    graph::prelude::*,
};

// Re-export the engine.
pub use fyrox;

#[derive(Default, Visit, Reflect, Debug)]
#[reflect(non_cloneable)]
pub struct Game {
    home_root: Handle<Grid>,
    main_ui: Handle<UserInterface>,
    last_time_ui: Option<Handle<UserInterface>>,
    grid: Handle<UiNode>,
    exit_button: Option<Handle<Button>>,
}

impl Game {
    fn load_ui(&mut self, path: &str, context: &mut PluginContext) -> () {
        if self.main_ui.is_some() {
            self.last_time_ui = Some(self.main_ui);
        }

        let p = path.to_string();
        context.load_ui(path, move |result, game: &mut Game, ctx| {
            game.main_ui = ctx.user_interfaces.add(result?.payload);

            if p == "data/scenes/level.ui" {
                // let Some((h, ..)) = ctx.user_interfaces.first().find_by_name_from_root("Grid") else { return Ok(()); };
                // let ui_node = ctx.user_interfaces.first().node(h);
                // let Some(grid) = ui_node.cast::<Grid>() else { return Ok(()); };
                // game.grid = h;
            }
            Ok(())
        });
    }

    // 關卡場景組件，為了確保所有創建過程都在自己的掌控，所以被迫選擇所有都由自己透過程式碼創建
    fn level(&mut self, size: usize, ctx: &mut PluginContext) -> Result<(), String>{
        // 退出按鈕
        let exit_button =
            ButtonBuilder::new(WidgetBuilder::new()
                .with_name("Exit")
                .with_width(100f32)
                .with_height(50f32)
                .with_vertical_alignment(VerticalAlignment::Top)
                .with_horizontal_alignment(HorizontalAlignment::Left)
                .with_margin(Thickness{
                    left: 20f32,
                    top: 20f32,
                    right: 0f32,
                    bottom: 0f32,
                })
            )
                .with_content(
                    // 按鈕文本
                    TextBuilder::new(WidgetBuilder::new()
                        .with_foreground(Brush::Solid(Color::WHITE).into()))
                        .with_font(ctx.resource_manager.request::<Font>("data/fonts/Noto_Sans_TC/static/NotoSansTC-Bold.ttf"))
                        .with_text("退出")
                        .with_font_size(25f32.into())
                        .with_vertical_text_alignment(VerticalAlignment::Center)
                        .with_horizontal_text_alignment(HorizontalAlignment::Center)
                        .build(&mut ctx.user_interfaces.first_mut().build_ctx())
                )
                .build(&mut ctx.user_interfaces.first_mut().build_ctx());

        // 儲存退出按鈕的 Handle
        self.exit_button(exit_button);

        // 標題
        let title = TextBuilder::new(WidgetBuilder::new()
            .with_foreground(Brush::Solid(Color::BLACK).into())
            .with_height(100f32)
            .with_vertical_alignment(VerticalAlignment::Top)
            .with_margin(Thickness{
                left: 0f32,
                top: 50f32,
                right: 0f32,
                bottom: 0f32
            })
        )
            .with_font(ctx.resource_manager.request::<Font>("data/fonts/Noto_Sans_TC/static/NotoSansTC-Bold.ttf"))
            .with_text("智能五色棋")
            .with_font_size(40f32.into())
            .with_vertical_text_alignment(VerticalAlignment::Center)
            .with_horizontal_text_alignment(HorizontalAlignment::Center)
            .build(&mut ctx.user_interfaces.first_mut().build_ctx()
            );

        let (_checkerboard, checkerboard_grid) = checkerboard::Checkerboard::init(size * 3, ctx);
        let root_widget = WidgetBuilder::new().with_child(exit_button).with_child(title).with_child(checkerboard_grid);
        self.home_root = GridBuilder::new(root_widget).add_row(GridDimension::stretch()).add_column(GridDimension::stretch()).build(&mut ctx.user_interfaces.first_mut().build_ctx());
        Ok(())
    }

    fn exit_button(&mut self, button: Handle<Button>){
        self.exit_button = Some(button);
    }
}

impl Plugin for Game {
    fn register(&self, _context: PluginRegistrationContext) -> GameResult {
        // Register your scripts here.
        Ok(())
    }

    fn init(&mut self, scene_path: Option<&str>, mut context: PluginContext) -> GameResult {
        context.load_scene_or_ui::<Self>(scene_path.unwrap_or("data/scenes.rgs"));
        self.load_ui("data/scenes/main.ui", &mut context);
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

        // 如果不是按鈕點擊事件則直接回傳
        let Some(ButtonMessage::Click) = message.data() else {
            return Ok(());
        };

        // 緩存 message.destination() 的結果
        let destination = message.destination();
        if let Some((level1, ..)) = context
            .user_interfaces
            .first()
            .find_by_name_from_root("Level1")
        {
            if destination == level1 {
                let Some((main, ..)) = context.user_interfaces.first().find_by_name_from_root("main") else { return  Ok(()); };
                context.user_interfaces.first_mut().remove_node(main);
                // self.load_ui("data/scenes/level.ui", context);
                let _ = self.level(2, context);
            }
        }
        if let Some((level2, ..)) = context
            .user_interfaces
            .first()
            .find_by_name_from_root("Level2")
        {
            if destination == level2 {
                let Some((main, ..)) = context.user_interfaces.first().find_by_name_from_root("main") else { return  Ok(()); };
                context.user_interfaces.first_mut().remove_node(main);
                // self.load_ui("data/scenes/level.ui", context);
                let _ = self.level(3, context);
            }
        }
        if let Some((exit, ..)) = context
            .user_interfaces
            .first()
            .find_by_name_from_root("Exit")
        {
            if destination == exit {
                self.load_ui("data/scenes/main.ui", context);
            }
        }

        Ok(())
    }
}
