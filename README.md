# React JS in Web 3.O

## Set up:
### 1. Open powershell
```
 wsl --install
 wsl --install -d Ubuntu
```

### 2. Open Ubuntu
### Install dfx and node in ubuntu

### 2.1
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

### 2.2 
```
sh -ci "$(curl -fsSL https://smartcontracts.org/install.sh)"
curl -o install_dfx.sh -fsSL https://internetcomputer.org/install.sh 
chmod +x install_dfx.sh
./install_dfx.sh
```

### 3. Create project
```
dfx new demo
```
- Choose: motoko, react, default
```
cd demo
dfx start --clean --background
dfx deploy demo
```

### 4. Open in VS code
```
code .
```


