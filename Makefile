register_submodule_updates:
	git pull
	git diff --exit-code || (echo "\n!!!\n" You have uncommited local changes in! Commit everything here and in subrepositories before you try to compile the website!; false)
	git submodule update --init --recursive
	git submodule foreach git checkout master
	git submodule foreach git pull origin master
	git diff --exit-code websitesource || (git add websitesource && git commit -m "Update websitesource submodule.")
render_websitesource: register_submodule_updates
	make -C ./websitesource html
	cp -r ./websitesource/build/* .
local_test_server: render_websitesource
	python3 -m http.server
publish: render_websitesource
	git add .
	git commit -m "Complete render of the entire website."
	git push
