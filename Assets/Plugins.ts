//Index plugins folder, pull plugin files
//plugin_pluginName.sep
//exports pluginName method/interface
class Plugins{
    #pluginsList: any []=[];
    #pluginsFolder: string;
    constructor(pluginsFolder: string){
        this.#pluginsFolder = pluginsFolder;
    }
    async init(){
        for await (const dirEntry of Deno.readDir(this.#pluginsFolder)) {
            if(dirEntry.isDirectory == false && dirEntry.isFile == true){
                this.#pluginsList.push(await import("." + this.#pluginsFolder + "/" + dirEntry.name));
            }
        }
        return this.#pluginsList;
        //get contents of plugin folder
        //use names in loop       
    }
    getPluginAt(pos: number){
        return this.#pluginsList[pos];
    }
    getPluginList(){
        return this.#pluginsList;
    }
}
export {Plugins}



