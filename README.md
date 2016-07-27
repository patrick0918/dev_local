# dev_local patrick
local setup: vagrant + foundation 6
#Vagrant
Ubuntu 14.04 LTS 64bit<br />
Virtual Box<br />
Nginx<br />
PHP 7 <br />
++ fpm <br />
++ xdebug<br />
Maria DB<br />
Ruby <br />
++ rails <br />
++ sass <br />
++ compass<br />
Nodejs<br />
++ bower<br />
++ grunt-cli<br />
++ grunt-contrib-concat<br />
++ grunt-contrib-compass<br />
++ grunt-contrib-uglify<br />
++ grunt-contrib-cssmin<br />
++ grunt-postcss<br />
++ autoprefixer
#Install:
extract vagrant/*<br />
configure vagrant file <br />
++ puphet/config.yaml [hostname, synced_folder, server_name, server_aliases]<br />
edit local host file <br />
$ vagrant up<br />
$ vagrant ssh<br />
$ cd "your_home_dir"<br />
$ bower install <br /> 
$ npm install<br />

#Grunt
##Update dev files:
grunt default
##Watch dev files:
grunt watch-dev
##Update production files:
grunt live
#Have fun