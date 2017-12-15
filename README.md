# Visualization_Bigdata

## Environment

Nodejs v8.9.1 LTS

## Setup

```shell
cd visualization_bigdata
npm install
```

## Initialize

```shell
# Create tables in database
mysql -h${db_host} -u{db_user} -p${db_password} sdata < scripts/create_tables.sql

# Register this application and privilege to tables
node postInstall.js
```

## Start Server

```shell
cd visualization_bigdata
npm start
```

## Main page URL
```javascript
http://${host}:${port}/pages/data_dashboard.html
```

