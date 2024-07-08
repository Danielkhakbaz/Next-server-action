"use server";

import { revalidatePath } from "next/cache";
import { updateUser } from "services/data/users";

export const updateUserAction = async (userID: string, formData: FormData) => {
    await updateUser(userID, formData.get("name") as string);

    revalidatePath(`/users/${userID}`);
};