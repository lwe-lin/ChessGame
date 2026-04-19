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

#[derive(Default, Visit, Reflect, Debug)]
#[reflect(non_cloneable)]
pub struct Game {
    button: Option<Handle<UiNode>>,
    main_ui: Handle<UserInterface>,
}

impl Game{
    fn load_ui(&mut self, path: &str, context: &mut PluginContext) -> (){
        if self.main_ui.is_some(){
            context.user_interfaces.remove(self.main_ui);
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
        context.load_scene_or_ui::<Self>(scene_path.unwrap_or("data/scenes.rgs"));
        self.load_ui("data/scenes/main.ui", &mut context);
        Ok(())
    }

    fn on_deinit(&mut self, _context: PluginContext) -> GameResult {
        // Do a cleanup here.
        Ok(())
    }

    fn update(&mut self, _context: &mut PluginContext) -> GameResult {
        // Add your global update code here.
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
        ui_handle: Handle<UserInterface>
    ) -> GameResult {
        // Handle UI events here.

        let Some(ButtonMessage::Click) = message.data() else { return Ok(()); };

        let Some((h, ..)) = context.user_interfaces.first().find_by_name_from_root("level1") else { return Ok(()); };

        if message.destination() != h { return Ok(()); }

        let Ok(ui) = context.user_interfaces.try_get(ui_handle) else { return Ok(()); };

        Log::info(format!("按鈕是：{:?}", ui.node(h).name()));
        self.load_ui("data/scenes/level.ui", context);
        Ok(())
    }
}
