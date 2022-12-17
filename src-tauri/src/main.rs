#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod db;
mod app;

use db::db_utils:: init_db ;
use app:: patients ;

fn main() {
    init_db().expect("初始化数据库失败！");

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            patients::create_patient
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
