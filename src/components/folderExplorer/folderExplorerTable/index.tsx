import {folder} from '../../../assets/icons'

const FolderExplorerTable  = ({folders, currentFolderId, setCurrentFolderId}) =>{
    return     <table style={styles.explorerTable} >
    <tr><th>Folder name</th><th>Last Updated At</th><th>Last Updated By</th></tr>

    {folders.filter(folder=>folder.parentId===currentFolderId).map((entity)=>(
        <tr key={entity.id} onClick={()=>setCurrentFolderId(entity.id)}>
            {/* Here I can add another component called Icon */}
            <td style={styles.firstColumn}>
                <span><img src={folder} alt="folder" style={styles.folderIcon}></img></span>
                    {entity.displayName}
                </td> 
            <td style={styles.secondColumn}>{entity.lastUpdated.updatedAt}</td>
            <td style={styles.thirdColumn}>{entity.lastUpdated.updatedBy}</td> 
        </tr>
    ))}

    </table>
    }


let styles = {
    explorerTable: {
        width:'900px',
        'text-align':'left',
        cursor:'pointer'
    },
    firstColumn: {
        width:'30%'
    },
    secondColumn: {
        width:'40%'
    },
    thirdColumn: {
        width:'30%'
    },
    folderIcon: {
        paddingRight: '5px'
    }
    }
    
export default FolderExplorerTable;