export const generateDateFromId = (id: number): String => {
    const now = new Date();
    now.setHours(now.getHours() - (id * 3600));
    return now.toISOString();
};

export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(date);
};