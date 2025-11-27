import { AppLayout } from "../components/AppLayout";
import { UserForm } from "../components/UserForm";
import { UserList } from "../components/UserList";

export const mainRoutes = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <UserList/>
            },
            {
                path: "create",
                element: <UserForm />
            }
        ]
    }
]