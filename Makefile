register_submodule_updates:
	git pull
	git submodule update --init --recursive
	git submodule foreach git checkout master
	git submodule foreach git pull origin master
	git diff --exit-code websitesource || (git add websitesource && git commit -m "Update websitesource submodule.")
	git diff --exit-code firmwaresource || (git add firmwaresource && git commit -m "Update firmwaresource submodule.")
render_websitesource: register_submodule_updates
	make -C ./websitesource html
	cp -r ./websitesource/build/* .
render_firmwaresource: register_submodule_updates
	make -C ./firmwaresource literary
	rm -rf codedoc
	mkdir codedoc
	cp -r ./firmwaresource/* codedoc/
local_test_server: render_websitesource render_firmwaresource
	python3 -m http.server
publish: render_websitesource
	git add .
	git commit -m "Complete render of the entire website."
	git push
