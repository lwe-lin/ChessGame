//! Game project.

#[allow(unused_imports)]
use fyrox::graph::prelude::*;
use fyrox::{
    core::pool::Handle, core::visitor::prelude::*, core::reflect::prelude::*, core::log::Log,
    event::Event,
    gui::{message::UiMessage, UserInterface, button::{Button, ButtonMessage}, UiNode},
    plugin::{Plugin, PluginContext, PluginRegistrationContext, error::GameResult},
};

// Re-export the engine.
pub use fyrox;
use fyrox::gui::messagebox::MessageBoxResult::No;

#[derive(Default, Visit, Reflect, Debug)]
#[reflect(non_cloneable)]
pub struct Game {
    button: Option<Handle<UiNode>>,
    main_ui: Handle<UserInterface>,

    last_time_ui: Option<Handle<UserInterface>>,
}

impl Game{
    fn load_ui(&mut self, path: &str, context: &mut PluginContext) -> (){
        if self.main_ui.is_some(){
            self.last_time_ui = Some(self.main_ui);
        }

        context.load_ui(path, |result, game: &mut Game, ctx | {
            game.main_ui = ctx.user_interfaces.add(result?.payload);
            Ok(())
        });
    }
}

impl Plugin for Game {
    fn register(&self, _context: PluginRegistrationContext) -> GameResult {
        // Register your scripts here.
        Ok(())
    }

    fn init(&mut self, scene_path: Option<&str>, mut context: PluginContext) -> GameResult {
        context.load_scene_or_ui::<Self>(scene_path.unwrap_or("data/scene.rgs"));
        self.load_ui("data/scenes/main.ui", &mut context);
        Ok(())
    }

    fn on_deinit(&mut self, _context: PluginContext) -> GameResult {
        // Do a cleanup here.
        Ok(())
    }

    fn update(&mut self, context: &mut PluginContext) -> GameResult {
        // Add your global update code here.
        if let Some(last_time_ui) = self.last_time_ui{
            context.user_interfaces.remove(last_time_ui);
            self.last_time_ui = None;
        }
        Ok(())
    }

    fn on_os_event(
        &mut self,
        _event: &Event<()>,
        _context: PluginContext,
    ) -> GameResult {
        // Do something on OS event here.
        Ok(())
    }

    fn on_ui_message(
        &mut self,
        context: &mut PluginContext,
        message: &UiMessage,
        _ui_handle: Handle<UserInterface>
    ) -> GameResult {
        // Handle UI events here.

        // 如果不是按鈕點擊事件則直接回傳
        let Some(ButtonMessage::Click) = message.data() else { return Ok(()); };

        // 緩存 message.destination() 的結果
        let destination = message.destination();
        if let Some((level1, ..)) = context.user_interfaces.first().find_by_name_from_root("level1") {
            if destination != level1 { return Ok(()); }
            self.load_ui("data/scenes/level.ui", context);
        }
        else if let Some((exit, ..)) = context.user_interfaces.first().find_by_name_from_root("exit") {
            if destination != exit { return Ok(()) }
            self.load_ui("data/scenes/main.ui", context);
        };

        Ok(())
    }
}
