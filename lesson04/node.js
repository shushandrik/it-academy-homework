const fs = require('fs-extra');

fs.mkdirpSync ('Folder1');
fs.createFileSync ('Folder1/newFile.txt');
fs.mkdirpSync ('Folder2');
fs.moveSync ('Folder1/newFile.txt', 'Folder2/newFile.txt');
fs.mkdirpSync ('Folder3');
fs.copyFileSync ('Folder2/newFile.txt', 'Folder3/newFile.txt');
fs.removeSync('Folder2/newFile.txt');
fs.removeSync('Folder3/newFile.txt');
fs.removeSync('Folder1');
fs.removeSync('Folder2');
fs.removeSync('Folder3');
