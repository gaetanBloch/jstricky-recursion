const fileSystem = {
  documents: {
    files: ['taxes.txt', 'resume.pdf', 'picture.png']
  },
  work: {
    urgent: {
      files: ['project-b.pdf']
    },
    lowPriority: {
      files: ['budget.xlsx']
    }
  }
};

console.log(getFileNames(fileSystem));

function getFileNames(fs) {

  const allFiles = [];

  Object.keys(fs).forEach(identifier => {
    if (Array.isArray(fs[identifier])) {
      allFiles.push(...fs[identifier]);
    } else {
      allFiles.push(...getFileNames(fs[identifier]));
    }
  });

  return allFiles
}
