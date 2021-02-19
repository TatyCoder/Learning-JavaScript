// I can also mock global packages, like axios:
const get = url => {
  return Promise.resolve({ data: { title: 'delectus aut autem' } });
};

exports.get = get;
