# SpinWearables.github.io

To download for local edits:

`git clone https://github.com/SpinWearables/SpinWearables.github.io.git`

Then download the submodules (one for the main page with the book, and one for the literary code documentation).

`make register_submodule_updates`

You can edit `websitesource` and `firmwaresource` as if they were standalone git repositories. Consult their own readmy files. When you are done (and have commited and pushed all the changes for these two repositories), you can run

`make publish`

in order to update the live page. This would perform a `git push` on the entire repo, carrying over any changes of the subrepos.
