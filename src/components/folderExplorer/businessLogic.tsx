import { useState, useEffect } from 'react';     
import getEntities from '../../adapters/entities'
import {Folder } from '../../models/'
import Moment from 'moment';

const FolderExplorerBusinessLogic= () => {
    const [currentFolderId, setCurrentFolderId] = useState('');
    const [allFolders, setAllFolders] = useState<Folder[]>([]);

    useEffect(() => {
        
        let allFoldersCreated: Folder[] = [];
        getEntities().then(entities=>{ 
            entities.forEach((entity)=> {
                var splittedIds=entity.id.split(':');
                splittedIds.reduce((parentFolderId, folderEntityId, index)=>{
                    //make new folder
                    var newFolderId=parentFolderId.concat(':',folderEntityId.trim());
                    //if the folder does not already exists, create a new one
                    if(!allFoldersCreated.find(folder=>folder.id===newFolderId))
                    allFoldersCreated.push({
                            id: newFolderId,
                            parentId: parentFolderId, 
                            displayName: splittedIds.length === index+1 ? entity.displayName : folderEntityId,
                            lastUpdated: {updatedAt: Moment(entity.lastUpdated.updatedAt.replaceAll(' ','')).format('d MMM yyyy hh:mm'), updatedBy:entity.lastUpdated.updatedBy }
                         }); 
                       
                    //returns the next accumulated path, for a new iteration
                    return newFolderId;
                },'');  
            });
            setCurrentFolderId('');
            setAllFolders(allFoldersCreated);
            
        }).catch((error)=>{/* DISPLAY ERROR ON SCREEN without crashing the react app */});
        
    }, []);

    return {currentFolderId, setCurrentFolderId, allFolders, setAllFolders};
}

export default FolderExplorerBusinessLogic