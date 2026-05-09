// use rand;
use fyrox::{
    core::{
        color::Color,
        pool::Handle,
        algebra::Point2,
    },
    gui::{
        button::ButtonBuilder,
        grid::{
            GridBuilder,
            GridDimension,
            Grid,
        },
        widget::WidgetBuilder,
        Thickness,
        border::{
            BorderBuilder,
            Border,
        },
        brush::Brush,
        UiNode,
    },
    plugin::PluginContext,
};

use std::collections::HashMap;

pub struct Checkerboard {
    pub size: usize,
    pub items: Vec<Color>,
    _object: Vec<Handle<Border>>,
    _names: Vec<String>,
    _button_start: HashMap<String, Point2<i32>>
}

impl Checkerboard {

    pub fn init(size: usize, context: &mut PluginContext) -> (Self, Handle<Grid>) {

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

        let mut names: Vec<String> = Vec::with_capacity(size*size);
        for i in 0..s{
            // 上面的按鈕
            let mut name = format!("top{}", i);
            names.push(name.clone());
            main_widget = main_widget.with_child(
                ButtonBuilder::new(
                    WidgetBuilder::new()
                        .with_name(name.as_str())
                        .with_width(button_size)
                        .with_height(button_size)
                        .on_row(0)
                        .on_column(1+s+i))
                    .build(&mut context.user_interfaces.first_mut().build_ctx())
            );
            // 左邊的按鈕
            name = format!("left{}", i);
            names.push(name.clone());
            main_widget = main_widget.with_child(
                ButtonBuilder::new(
                    WidgetBuilder::new()
                        .with_name(name.as_str())
                        .with_width(button_size)
                        .with_height(button_size)
                        .on_row(1+s+i)
                        .on_column(0))
                    .build(&mut context.user_interfaces.first_mut().build_ctx())
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
                    .build(&mut context.user_interfaces.first_mut().build_ctx())
            );
            // 右邊的按鈕
            name = format!("top{}", i);
            names.push(name.clone());
            main_widget = main_widget.with_child(
                ButtonBuilder::new(
                    WidgetBuilder::new()
                        .with_name(name.as_str())
                        .with_width(button_size)
                        .with_height(button_size)
                        .on_row(1+s+i)
                        .on_column(size+1))
                    .build(&mut context.user_interfaces.first_mut().build_ctx())
            );
        }

        // 初始化顏色
        let mut result = vec![Color::BLACK; size * size];

        // 定義顏色
        // 先暫時用白色
        let center = Color::WHITE;
        // 紅色
        let top = Color::RED;
        // 橙色
        let left = Color::ORANGE;
        // 黃色
        let bottom = Color::YELLOW;
        // 藍色
        let right = Color::BLUE;

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

        let mut all_object = Vec::with_capacity(size * size);
        for y in 0..size{
            for x in 0..size{
                let border_handle = BorderBuilder::new(
                    WidgetBuilder::new()
                        .with_background(Brush::Solid(result[Self::index(size, x, y)]).into())
                        .on_row(1+y)
                        .on_column(1+x)
                )
                    .build(&mut context.user_interfaces.first_mut().build_ctx());
                all_object.push(border_handle);
                main_widget = main_widget.with_child(border_handle);
            }
        }

        // 實例化
        let mut main = GridBuilder::new(main_widget);
        for _i in 0..size+2{
            let mut row = GridDimension::stretch();
            row.desired_size = 1f32;
            main = main.add_row(row);
            let mut col = GridDimension::stretch();
            col.desired_size = 1f32;
            main = main.add_column(col);
        }

        (Self{
            size: size,
            items: result,
            _object: all_object,
            _names: names,
            _button_start: HashMap::new(),
        }, main.build(&mut context.user_interfaces.first_mut().build_ctx()))
    }

    fn index(size: usize, x:usize,y:usize)->usize{
        size*y+x
    }

    fn _update_color(&self, context: &mut PluginContext){
        let size = self.size;
        for y in 0..size{
            for x in 0..size{
                let index = Self::index(x, y, size);
                let color = self.items[index];
                let ui = &mut *context.user_interfaces.first_mut();
                let ui_node = ui.node_mut(self._object[index].to_base::<UiNode>());
                let border = ui_node.cast_mut::<Border>().unwrap();
                border.set_background(Brush::Solid(color));
                // let sender = ui.send(self.object[index], );
            }
        }
    }
}
