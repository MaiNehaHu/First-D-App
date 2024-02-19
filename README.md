# React JS in Web 3.O

## Set up:
### 1. Install Pragti HRM:
### Install Pragati HRM App on Windows: https://storage.googleapis.com/apps-hrm-desktop/2.2.0-01-2024/Pragati%20HRM_2.2.0_x64_en-US%202.msi.zip

### 2. Install TeamViwer:
### https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe?utm_source=google&utm_medium=cpc&utm_campaign=in%7Cb%7Cpr%7C22%7Caug%7Ctv-core-download-sn%7Cfree%7Ct0%7C0&utm_content=Download&utm_term=teamviewer+download 

### 3. Open powershell
```
 wsl --install
 wsl --install -d Ubuntu
```

### 4. Open Ubuntu
### Install dfx and node in ubuntu

###	4.1
```
curl -o install_nvm.sh https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh 
chmod +x install_nvm.sh
./install_nvm.sh
source ~/.bashrc
nvm list_remote 
nvm install v18.19.1
nvm list 
node -v
```

###	4.2 
```
sh -ci "$(curl -fsSL https://smartcontracts.org/install.sh)"
(or) curl -o install_dfx.sh -fsSL https://internetcomputer.org/install.sh 
chmod +x install_dfx.sh
./install_dfx.sh
```

### 5. Create project
```
	-- dfx new demo
	-- motoko, react, default
	-- cd demo
	-- dfx start --clean --background
	-- dfx deploy demo
```

### 6. Open in VS code
```
code .
```


