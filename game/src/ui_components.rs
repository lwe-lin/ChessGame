use fyrox::core::color::Color;
use fyrox::core::pool::Handle;
use fyrox::gui::button::{Button, ButtonBuilder};
use fyrox::gui::{HorizontalAlignment, Thickness, VerticalAlignment};
use fyrox::gui::brush::Brush;
use fyrox::gui::font::Font;
use fyrox::gui::text::{Text, TextBuilder};
use fyrox::gui::widget::WidgetBuilder;
use fyrox::plugin::PluginContext;

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
}

pub struct UiComponentsMessage{

}

impl UiComponentsMessage{

}