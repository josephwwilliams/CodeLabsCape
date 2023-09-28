interface User {
  id: number;
  name: string;
}

interface Link {
  title: string;
  url: string;
}

const links: Link[] = [];

function upperCase(name: string) {
  const user: User = {
    id: 4,
    name: name.toUpperCase(),
  };
  return user;
}

upperCase('Joseph');
