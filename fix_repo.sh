# If you don't properly clone the repositories (see README.md) this can fix your environment

#git clone --recursive --branch docksal git@github.com:weknowinc/webcomponents_handson.git
cd webcomponents_handson/outline
git checkout handson-freeze
git submodule init
git submodule update
cd src/components/wk/
git checkout main
