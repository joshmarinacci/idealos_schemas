#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}

pub mod debug;
pub mod general;
pub mod graphics;
pub mod resources;
pub mod windows;
pub mod input;
pub mod menus;