"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"
import { updateUser } from "services/data/users";

export const updateUserAction = async (userID: string, formData: FormData) => {
    let newName = formData.get("name") as string;

    await updateUser(userID, newName);

    revalidatePath(`/users/${userID}`);

    redirect(`/users/${userID}?name=${newName}`);
};