type User = {
    id: string;
    name: string;
}

const users = [
    {
        id: "1",
        name: "Danial",
    },
    {
        id: "2",
        name: "Behzad",
    },
    {
        id: "3",
        name: "Ali",
    },
];

export const getUsers = async () => {
    return users;
};

export const getUser = async (userID: string) => {
    return users.find((user) => user.id === userID) as User;
};

export const updateUser = async (userID: string, name: string) =>  {
    const user = await getUser(userID) as User;

    user.name = name;
};