// FAKE API FOR USER AUTHENTICATION
const fakeApi = {
    // Simulate API delay
    delay: (ms) => new Promise(resolve => setTimeout(resolve, ms)),
    
    // Fake user database
    users: [
        {
            id: 1,
            username: "admin",
            password: "admin123",
            role: "admin",
            fullName: "Administrator",
            email: "admin@awcc.af"
        },
        {
            id: 2,
            username: "manager",
            password: "manager123",
            role: "manager",
            fullName: "مدیر حساب",
            email: "manager@awcc.af"
        },
        {
            id: 3,
            username: "user",
            password: "user123",
            role: "user",
            fullName: "کاربر عادی",
            email: "user@awcc.af"
        }
    ],
    
    // Login method
    async login(username, password) {
        await this.delay(1000); // Simulate network delay
        
        const user = this.users.find(
            u => u.username === username && u.password === password
        );
        
        if (!user) {
            throw new Error("یوزر نوم یا پټنوم نادرست دي");
        }
        
        // Return user data without password
        const { password: _, ...userData } = user;
        return {
            success: true,
            user: userData
        };
    },
    
    // Get current user from localStorage
    getCurrentUser() {
        const userJson = localStorage.getItem("currentUser");
        return userJson ? JSON.parse(userJson) : null;
    },
    
    // Logout method
    logout() {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("username");
    }
};

// Export for use in other modules
window.fakeApi = fakeApi;