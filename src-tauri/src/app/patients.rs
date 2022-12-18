use crate::db::db_utils;
use serde_json::{Value};

// 添加患者
#[tauri::command]
pub async fn create_patient(patient_data: String) {
  println!("patient_data: {}", patient_data);

  let patient: Value = serde_json::from_str(&patient_data).unwrap();
  println!("-------");
  println!("patient: {}", patient["surname"]);

  return;

  let repository = db_utils::Repository::new();

  let sql: &str = "INSERT INTO table_1(Name) VALUES ('acdcdaaa')";

  println!("sql: {}", sql);
  repository.insert_data(&sql);

  
  println!("createpatients aaa");
}


// pub fn insert_patient() {
  // check_table_existed("patients")?;
// }
// 删除患者 

// 修改患者 

// 查询患者 