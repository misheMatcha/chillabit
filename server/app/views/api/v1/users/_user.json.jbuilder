json.id @user.id
json.email @user.email
json.username @user.username
json.age @user.age
json.gender @user.gender
json.city @user.city
json.country @user.country
json.bio @user.bio
json.url @user.url
json.website @user.website
json.support_url @user.support_url
json.header_bg polymorphic_url(@user.header_bg) if @user.header_bg.attached?
