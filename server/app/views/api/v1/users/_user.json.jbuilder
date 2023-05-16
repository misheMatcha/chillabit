json.id @user.id
json.email @user.email
json.username @user.username
json.fname @user.fname
json.lname @user.lname
json.fullname @user.fname && @user.lname ? @user.fname + ' ' + @user.lname : @user.fname ? @user.fname : @user.lname
json.age @user.age
json.gender @user.gender
json.city @user.city
json.country @user.country
json.full_location @user.city && @user.country ? @user.city + ', ' + @user.country : @user.city ? @user.city : @user.country
json.bio @user.bio
json.url @user.url
json.links @user.links
json.header_bg polymorphic_url(@user.header_bg) if @user.header_bg.attached?
json.avatar polymorphic_url(@user.avatar) if @user.avatar.attached?
