// use rand;
use fyrox::{
    core::color::Color,
    gui::{
        BuildContext,
        button::ButtonBuilder,
        grid::{
            GridBuilder,
            GridDimension,
        },
        widget::WidgetBuilder,
        Thickness,
        border::BorderBuilder,
        brush::Brush,
    },
};
use fyrox::core::pool::Handle;
use fyrox::gui::UiNode;

pub struct CheckerboardBuilder {
    itmes: Vec<(u8, u8, u8)>,
}

impl CheckerboardBuilder {

    pub fn new(size: usize, root: &mut WidgetBuilder, ctx: &mut BuildContext) -> Self {
        // 整個空間
        // 基礎
        let mut main_widget = WidgetBuilder::new()
            .with_width(300f32)
            .with_height(300f32)
            .with_margin(Thickness{
                top: 150f32,
                left: 0f32,
                right: 0f32,
                bottom: 0f32,
            });
        let s = size / 3;
        let button_size = 25f32;
        for i in 0..s{
            // 上面的按鈕
            let mut name = format!("top{}", i);
            main_widget = main_widget.with_child(
                ButtonBuilder::new(
                    WidgetBuilder::new()
                        .with_name(name.as_str())
                        .with_width(button_size)
                        .with_height(button_size)
                        .on_row(0)
                        .on_column(1+s+i))
                    .build(ctx)
            );
            // 左邊的按鈕
            name = format!("left{}", i);
            main_widget = main_widget.with_child(
                ButtonBuilder::new(
                    WidgetBuilder::new()
                        .with_name(name.as_str())
                        .with_width(button_size)
                        .with_height(button_size)
                        .on_row(1+s+i)
                        .on_column(0))
                    .build(ctx)
            );
            // 下面的按鈕
            name = format!("bottom{}", i);
            main_widget = main_widget.with_child(
                ButtonBuilder::new(
                    WidgetBuilder::new()
                        .with_name(name.as_str())
                        .with_width(button_size)
                        .with_height(button_size)
                        .on_row(size+1)
                        .on_column(1+s+i))
                    .build(ctx)
            );
            // 右邊的按鈕
            name = format!("top{}", i);
            main_widget = main_widget.with_child(
                ButtonBuilder::new(
                    WidgetBuilder::new()
                        .with_name(name.as_str())
                        .with_width(button_size)
                        .with_height(button_size)
                        .on_row(1+s+i)
                        .on_column(size+1))
                    .build(ctx)
            );
        }

        // 初始化顏色
        let mut result = vec![(0,0,0); size * size];

        // 定義顏色
        // 先暫時用白色
        let center:(u8,u8,u8) = (255,255,255);
        // 紅色
        let top:(u8,u8,u8) = (255,0,0);
        // 橙色
        let left:(u8,u8,u8) = (255,155,0);
        // 黃色
        let bottom:(u8,u8,u8) = (255,255,0);
        // 藍色
        let right:(u8,u8,u8) = (0,150,255);

        for y in 0..size{
            for x in 0..size{
                // 中間區域
                if x >= s && x < s * 2 && y >= s && y < s * 2 {
                    result[Self::index(size, x, y)] = center;
                }
                // // 上面區域
                if x >= s && x < s * 2 && y < s {
                    result[Self::index(size, x,y)] = top;
                }
                // // 左邊區域
                if x < s && y >= s && y < s * 2 {
                    result[Self::index(size, x,y)] = left;
                }
                // // 下面中間區域
                if x >= s && x < s * 2 && y >= s * 2 {
                    result[Self::index(size, x,y)] = bottom;
                }
                // // 右邊區域
                if x >= s * 2 && y >= s && y < s * 2 {
                    result[Self::index(size, x,y)] = right;
                }
            }
        }

        for y in 0..size{
            for x in 0..size{
                main_widget = main_widget.with_child(BorderBuilder::new(
                    WidgetBuilder::new()
                        .with_background(Brush::Solid(Color {
                            r: result[Self::index(size, x, y)].0,
                            g: result[Self::index(size, x, y)].1,
                            b: result[Self::index(size, x, y)].2,
                            a: 255,
                        }).into())
                        .on_row(1+y)
                        .on_column(1+x)
                )
                    .build(ctx));
            }
        }

        // 實例化
        let mut main = GridBuilder::new(main_widget);
        for i in 0..size+2{
            let mut row = GridDimension::stretch();
            row.desired_size = 1f32;
            main = main.add_row(row);
            let mut col = GridDimension::stretch();
            col.desired_size = 1f32;
            main = main.add_column(col);
        }

        root = root.with_child(main.build(ctx));

        Self{
            itmes: result,
        }
    }

    fn index(size: usize, x:usize,y:usize)->usize{
        size*y+x
    }
}
