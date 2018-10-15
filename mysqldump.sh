#backup the sql in user/backup/
mysqldump -uroot -pnccutest member | gzip > /Users/nowvan/WebstormProjects/nodejs_backend/MySQL/mysqldb_`date +%F`.sql.gz

#三天前的資料自行刪除
find /Users/nowvan/WebstormProjects/nodejs_backend/MySQL -type f -mtime +3 -exec rm {} + 
