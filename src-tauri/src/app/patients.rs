use crate::db::db_utils;


// 添加患者
#[tauri::command]
pub async fn create_patient() {
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