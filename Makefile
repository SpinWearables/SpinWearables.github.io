update_submodules:
	git submodule update --init --recursive
	git submodule foreach git checkout master
	git submodule foreach git pull origin master
	git commit -am "Update all submodules."
