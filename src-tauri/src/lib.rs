// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

use std::process::Command;
use std::str;

#[tauri::command]
fn list_usb_devices() -> Result<String, String> {
    let output = Command::new("python3")
        .arg("scripts/list_connected_usb.py")
        .output()
        .map_err(|e| format!("Failed to execute command: {}", e))?;

    if !output.status.success() {
        let stderr = String::from_utf8_lossy(&output.stderr);
        let stdout = String::from_utf8_lossy(&output.stdout);
        return Err(format!(
            "Command failed with status: {}\nstdout: {}\nstderr: {}",
            output.status, stdout, stderr
        ));
    }

    let result = String::from_utf8(output.stdout)
        .map_err(|e| format!("Failed to parse output: {}", e))?;

    Ok(result)
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            list_usb_devices
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
