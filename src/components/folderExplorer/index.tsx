import FolderExplorerBusinessLogic from './businessLogic'
import FolderExplorerTable from './folderExplorerTable'

const FolderExplorer= () => {
    const {currentFolderId, setCurrentFolderId, allFolders} = FolderExplorerBusinessLogic();

    var currentFolder = allFolders.find(folder=>folder.id===currentFolderId);
    return (
        <div style={styles.container}>
            <div style={styles.goUpButton} onClick={()=>setCurrentFolderId(currentFolder?currentFolder.parentId:'')}>GO UP</div>
            <div >Current folder {currentFolderId}</div>
            <FolderExplorerTable folders={allFolders} currentFolderId={currentFolderId} setCurrentFolderId={setCurrentFolderId}/>
        </div>
    )
    }


let styles = {
    container: {
        padding: '30px'
    },
    goUpButton: {
        cursor: 'pointer'
    }
}

export default FolderExplorer;