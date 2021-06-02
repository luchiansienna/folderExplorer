import { useState, useEffect } from 'react';     
import entities from '../../adapters/entities'
import { Folder } from '../../models/'
import Moment from 'moment';

const FolderExplorerBusinessLogic= () => {
    const [currentFolderId, setCurrentFolderId] = useState('');
    let [allFolders, setAllFolders] = useState<Folder[]>([]);

    useEffect(() => {
        
        let allFoldersCreated: Folder[] = [];
        
        entities.getEntities().forEach(entity=>{ 
            
            //entities.forEach((entity)=> {
                var splittedIds=entity.id.split(':');
                splittedIds.reduce((parentFolderId, folderEntityId, index)=>{
                    //make new folder
                    var newFolderId=parentFolderId.concat(':',folderEntityId.trim().toLowerCase());
                    //if the folder does not already exists, create a new one
                    if(!allFoldersCreated.find(folder=>folder.id===newFolderId))
                        allFoldersCreated.push({
                                id: newFolderId,
                                parentId: parentFolderId, 
                                displayName: splittedIds.length === index+1 ? entity.displayName.trim() : folderEntityId.trim().toLowerCase(),
                                //replaceAll does not work in nodeJS so I used split and join
                                lastUpdated: {updatedAt: Moment(entity.lastUpdated.updatedAt.split(' ').join('')).format('d MMM yyyy hh:mm'), updatedBy:entity.lastUpdated.updatedBy }
                            }); 
                       
                    //returns the next accumulated path, for a new iteration
                    return newFolderId;
                },'');  
            });
            setCurrentFolderId('');
            setAllFolders(allFoldersCreated);
        //}).catch((error)=>{/* DISPLAY ERROR ON SCREEN without crashing the react app */});
        
     }, []);

    //returns the state
    return {currentFolderId, setCurrentFolderId, allFolders, setAllFolders};
}

export default FolderExplorerBusinessLogic