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
        widget::{
            WidgetBuilder,
            WidgetMessage
        },
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

#[derive(Default, Debug)]
pub struct Checkerboard {
    pub size: usize,
    pub items: Vec<Color>,
    object: Vec<Handle<Border>>,
    names: Vec<String>,
    button_start: HashMap<String, Point2<usize>>
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
        let mut button_start: HashMap<String, Point2<usize>> = HashMap::new();
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
                        .on_column(1+s+i)
                        .with_foreground(Brush::Solid(Color::WHITE).into()))
                    .build(&mut context.user_interfaces.first_mut().build_ctx())
            );
            if !button_start.contains_key(name.as_str()) {
                button_start.insert(name.clone(), Point2::new(s+i, 0));
            }

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
            if !button_start.contains_key(name.as_str()) {
                button_start.insert(name.clone(), Point2::new(0, s+i));
            }

            // 下面的按鈕
            name = format!("bottom{}", i);
            names.push(name.clone());
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
            if !button_start.contains_key(name.as_str()) {
                button_start.insert(name.clone(), Point2::new(s+i, size - 1));
            }

            // 右邊的按鈕
            name = format!("right{}", i);
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
            if !button_start.contains_key(name.as_str()) {
                button_start.insert(name.clone(), Point2::new(size - 1, s+i));
            }
        }

        // 初始化顏色
        let mut result = vec![Color::GRAY; size * size];

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
            object: all_object,
            names: names,
            button_start: button_start,
        }, main.build(&mut context.user_interfaces.first_mut().build_ctx()))
    }

    fn index(size: usize, x:usize,y:usize)->usize{
        size*y+x
    }

    pub fn update_color(&self, context: &mut PluginContext){
        let size = self.size;
        for y in 0..size{
            for x in 0..size{
                let index = Self::index(size, x, y);
                let color = self.items[index];
                let ui = context.user_interfaces.first();
                // let ui_node = ui.node_mut(self._object[index].to_base::<UiNode>());
                // let border = ui_node.cast_mut::<Border>().unwrap();
                // border.set_background(Brush::Solid(color));
                ui.send(self.object[index].to_base::<UiNode>(), WidgetMessage::Background(Brush::Solid(color).into()));
            }
        }
    }

    pub fn id_to_name(&self, id: usize) -> String{
        self.names[id].clone()
    }

    pub fn move_one_step(&mut self, name: &str){
        if self.button_start.contains_key(name) {
            let point = self.button_start[name];
            // 上面的按鈕
            if point.y == 0 {
                // 自己
                let mut index1 = Self::index(self.size, point.x, 0);
                let color1: Option<Color> = Some(self.items[index1]);
                for i in 0..self.size-1 {
                    index1 = Self::index(self.size, point.x, i);
                    let index2 = Self::index(self.size, point.x, i+1);
                    let color2 = self.items[index2];
                    self.items[index1] = color2;
                }
                self.items[Self::index(self.size, point.x, self.size-1)] = color1.unwrap();
            }

            // 左邊的按鈕
            if point.x == 0 {
                // 自己
                let mut index1 = Self::index(self.size, 0, point.y);
                let color1: Option<Color> = Some(self.items[index1]);
                for i in 0..self.size-1 {
                    index1 = Self::index(self.size, i, point.y);
                    let index2 = Self::index(self.size, i+1, point.y);
                    let color2 = self.items[index2];
                    self.items[index1] = color2;
                }
                self.items[Self::index(self.size, self.size-1, point.y)] = color1.unwrap();
            }

            // 下面的按鈕
            if point.y == self.size-1 {
                // 自己
                let mut index1 = Self::index(self.size, point.x, self.size-1);
                let color1: Option<Color> = Some(self.items[index1]);
                for i in (1..=self.size-1).rev() {
                    index1 = Self::index(self.size, point.x, i);
                    let index2 = Self::index(self.size, point.x, i-1);
                    let color2 = self.items[index2];
                    self.items[index1] = color2;
                }
                self.items[Self::index(self.size, point.x, 0)] = color1.unwrap();
            }

            // 右邊的按鈕
            if point.x == self.size-1 {
                // 自己
                let mut index1 = Self::index(self.size, self.size-1, point.y);
                let color1: Option<Color> = Some(self.items[index1]);
                for i in (1..=self.size-1).rev() {
                    index1 = Self::index(self.size, i, point.y);
                    let index2 = Self::index(self.size, i-1, point.y);
                    let color2 = self.items[index2];
                    self.items[index1] = color2;
                }
                self.items[Self::index(self.size, 0, point.y)] = color1.unwrap();
            }
        }
    }

    pub fn is_win(&self) -> bool{
        let size = self.size/3;

        let mut colors: Vec<Color> = Vec::with_capacity(size*size);
        let mut number = 0;
        // 上面
        for y in 0..size{
            for x in size..size*2{
                let index = Self::index(self.size, x, y);
                if !colors.contains(&self.items[index]) {
                    colors.push(self.items[index]);
                }
            }
        }
        if colors.len() == 1 {
            number += 1;
        }

        colors.clear();
        // 左邊
        for y in size..size*2{
            for x in 0..size{
                let index = Self::index(self.size, x, y);
                if !colors.contains(&self.items[index]) {
                    colors.push(self.items[index]);
                }
            }
        }
        if colors.len() == 1 {
            number += 1;
        }

        colors.clear();
        // 下面
        for y in size*2..size*3{
            for x in size..size*2{
                let index = Self::index(self.size, x, y);
                if !colors.contains(&self.items[index]) {
                    colors.push(self.items[index]);
                }
            }
        }
        if colors.len() == 1 {
            number += 1;
        }

        colors.clear();
        // 右邊
        for y in size..size*2{
            for x in size*2..size*3{
                let index = Self::index(self.size, x, y);
                if !colors.contains(&self.items[index]) {
                    colors.push(self.items[index]);
                }
            }
        }
        if colors.len() == 1 {
            number += 1;
        }

        if number == 4 {
            true
        }else{
            false
        }
    }

    pub fn drop(&self, context: &mut PluginContext){
        let ui = context.user_interfaces.first_mut();
        for i in 0..self.size{
            ui.send(self.object[i], WidgetMessage::Remove);
        }
        let _ = self.items.clone();
        let _ = self.names.clone();
        let _ = self.button_start.clone();
    }
}
