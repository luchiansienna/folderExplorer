import businessLogic from '../components/folderExplorer/businessLogic';
import getEntities from '../adapters/entities'
import React from 'react'
import { testItems, testCases } from './testData'

describe("Business Logic function", () => {

    testCases.forEach(test => {
        it(`should work with ${test.description} test`,   async() =>  {
            
            const setCurrentFolderId = jest.fn();
            const setAllFolders = jest.fn();

            React.useState = jest.fn()
                .mockReturnValueOnce(['',setCurrentFolderId, {}])
                .mockReturnValueOnce([[],setAllFolders, {}]);

            React.useEffect = jest.fn().mockImplementationOnce(f=>f()) ;
            
            getEntities.getEntities = jest.fn().mockImplementationOnce(f=>testItems[test.itemAt]) ;
            
            //make the call
            businessLogic();

            expect(setCurrentFolderId).toHaveBeenCalled();
            expect(setAllFolders).toHaveBeenCalledWith(test.expectedToCallWith);
        })
    });
})  