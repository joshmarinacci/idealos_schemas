use std::collections::HashMap;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub enum node_type { }
pub const keystroke_obj_name: &str = "MAKE_keystroke_obj_name";
#[derive(Serialize, Deserialize, Debug)]
pub struct keystroke_obj {
    #[serde(rename = "type")]
    pub type_:String,
    pub modifier:String,
    pub key:String,
}
pub const item_name: &str = "MAKE_item_name";
#[derive(Serialize, Deserialize, Debug)]
pub struct item {
    #[serde(rename = "type")]
    pub type_:String,
    pub node_type:node_type,
    pub label:String,
    pub event:String,
    pub keystroke:keystroke_obj,
}
pub type item_array = Vec<item>;
pub const root_name: &str = "MAKE_root_name";
#[derive(Serialize, Deserialize, Debug)]
pub struct root {
    #[serde(rename = "type")]
    pub type_:String,
    #[serde(rename = "type")]
    pub _type:node_type,
    pub children:item_array,
}
pub const SetMenubar_name: &str = "MAKE_SetMenubar_name";
#[derive(Serialize, Deserialize, Debug)]
pub struct SetMenubar {
    #[serde(rename = "type")]
    pub type_:String,
    pub menu:root,
}