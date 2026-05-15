use fyrox::core::color::Color;
use fyrox::core::pool::Handle;
use fyrox::graph::SceneGraph;
use fyrox::gui::button::{Button, ButtonBuilder};
use fyrox::gui::{HorizontalAlignment, Thickness, UserInterface, VerticalAlignment};
use fyrox::gui::brush::Brush;
use fyrox::gui::font::Font;
use fyrox::gui::message::UiMessage;
use fyrox::gui::text::{Text, TextBuilder};
use fyrox::gui::widget::WidgetBuilder;
use fyrox::plugin::PluginContext;

use crate::Game;

pub struct UiComponents{
}

impl UiComponents{
    pub fn button(ctx: &mut PluginContext, name: &str, text: &str, width: f32, height: f32) -> Handle<Button>{
        ButtonBuilder::new(WidgetBuilder::new()
            .with_name(name)
            .with_width(width)
            .with_height(height)
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
                    .with_text(text)
                    .with_font_size(25f32.into())
                    .with_vertical_text_alignment(VerticalAlignment::Center)
                    .with_horizontal_text_alignment(HorizontalAlignment::Center)
                    .build(&mut ctx.user_interfaces.first_mut().build_ctx())
            )
            .build(&mut ctx.user_interfaces.first_mut().build_ctx())
    }

    pub fn title(ctx: &mut PluginContext, text: &str, height: f32) -> Handle<Text>{
        TextBuilder::new(WidgetBuilder::new()
            .with_foreground(Brush::Solid(Color::BLACK).into())
            .with_height(height)
            .with_vertical_alignment(VerticalAlignment::Top)
            .with_margin(Thickness{
                left: 0f32,
                top: 50f32,
                right: 0f32,
                bottom: 0f32
            })
        )
            .with_font(ctx.resource_manager.request::<Font>("data/fonts/Noto_Sans_TC/static/NotoSansTC-Bold.ttf"))
            .with_text(text)
            .with_font_size(40f32.into())
            .with_vertical_text_alignment(VerticalAlignment::Center)
            .with_horizontal_text_alignment(HorizontalAlignment::Center)
            .build(&mut ctx.user_interfaces.first_mut().build_ctx()
            )
    }

    pub fn level(ctx: &mut PluginContext, number: usize) -> Vec<Handle<Button>>{
        let mut level_buttons = Vec::with_capacity(number);

        for i in 0..number{
            let button = ButtonBuilder::new(WidgetBuilder::new()
                    .with_name(format!("Level{}", i).as_str())
                    .with_width(100f32)
                    .with_height(50f32)
                    .with_vertical_alignment(VerticalAlignment::Top)
                    .with_horizontal_alignment(HorizontalAlignment::Center)
                    .with_margin(Thickness{
                        left: 0f32,
                        top: 70f32 * (i as f32 + 1f32),
                        right: 0f32,
                        bottom: 0f32,
                    })
                )
                    .with_content(
                        // 按鈕文本
                        TextBuilder::new(WidgetBuilder::new()
                            .with_foreground(Brush::Solid(Color::WHITE).into()))
                            .with_font(ctx.resource_manager.request::<Font>("data/fonts/Noto_Sans_TC/static/NotoSansTC-Bold.ttf"))
                            .with_text(format!("第 {} 關", i + 1))
                            .with_font_size(25f32.into())
                            .with_vertical_text_alignment(VerticalAlignment::Center)
                            .with_horizontal_text_alignment(HorizontalAlignment::Center)
                            .build(&mut ctx.user_interfaces.first_mut().build_ctx())
                    )
                    .build(&mut ctx.user_interfaces.first_mut().build_ctx());
            level_buttons.push(button);
        }

        level_buttons
    }
}

pub struct UiComponentsMessage{

}

impl UiComponentsMessage{
    pub fn level(game: &mut Game,context: &mut PluginContext,message: &UiMessage, _ui_handle: Handle<UserInterface>,){
        let destination = message.destination();
        if let Some((level1, ..)) = context
            .user_interfaces
            .first()
            .find_by_name_from_root("Level1")
        {
            if destination == level1 {
                let Some((main, ..)) = context.user_interfaces.first().find_by_name_from_root("main") else { return; };
                context.user_interfaces.first_mut().remove_node(main);
                let _ = game.level(2, context);
                game.random_level(3, context);
            }
        }
    }
}