export function activator<T>(type: { new(): T ;} ): T {
    return new type();
}