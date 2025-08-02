import wmi
import json

def list_connected_usb():
    c = wmi.WMI()
    usb_devices = []
    for disk in c.Win32_LogicalDisk():
        if disk.DriveType == 2:
            usb_devices.append({
                'DeviceID': disk.DeviceID,
                'VolumeName': disk.VolumeName or "Unnamed USB"
            })
    return usb_devices

if __name__ == "__main__":
    print(json.dumps(list_connected_usb()))