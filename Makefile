register_submodule_updates:
	git submodule update --init --recursive
	git submodule foreach git checkout master
	git submodule foreach git pull origin master
	git diff --exit-code websitesource || (git add websitesource && git commit -m "Update websitesource submodule.")
render_websitesource: register_submodule_updates
	make -C ./websitesource html
	cp -r ./websitesource/build/* .
local_test_server: render_websitesource
	python3 -m http.server
