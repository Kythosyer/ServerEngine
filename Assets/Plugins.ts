//Index plugins folder, pull plugin files
//plugin_pluginName.sep
//exports pluginName method/interface
class Plugins{
    #pluginsList: any [];
    #pluginsFolder: string;
    constructor(pluginsFolder: string){
        this.#pluginsFolder = pluginsFolder;
        this.#pluginsList = [];
    }
    async init(){
        for await (const dirEntry of Deno.readDir(this.#pluginsFolder)) {
            if(dirEntry.isDirectory == false && dirEntry.isFile == true){
                this.#pluginsList.push(await import("." + this.#pluginsFolder + "/" + dirEntry.name));
            }
        }
        //get contents of plugin folder
        //use names in loop    
        this.executePlugins();   
    }
    executePlugins(){
        console.log(this.#pluginsList);
        for (const plugin of this.#pluginsList) {
            console.log(plugin.test());
        }
        
    }
}
export {Plugins}



