import { directoryImport } from 'directory-import';

function getFile( ) {
    const importedModules = directoryImport('./jam');
    alert(importedModules);
}

export default getFile;

