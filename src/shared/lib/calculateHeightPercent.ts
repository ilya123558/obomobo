type TaskData = {
  planned: number
  completed: number
  data: string
};

type CalculatedHeightPercent = {
    totalHeightPercent: number;
    completedHeightPercent: number;
};

export function calculateHeightPercent({completed, planned}: TaskData): CalculatedHeightPercent {
    let totalHeightPercent: number;
    let completedHeightPercent: number;

    if (completed < planned) {
        totalHeightPercent = 75;
        completedHeightPercent = totalHeightPercent * (completed / planned);
    } else if (completed === planned) {
        totalHeightPercent = 50;
        completedHeightPercent = 50;
    } else {
        const scaleFactor = completed / planned;
        totalHeightPercent = 100 / scaleFactor;
        completedHeightPercent = 100;
    }

    return {
        totalHeightPercent,
        completedHeightPercent
    };
}