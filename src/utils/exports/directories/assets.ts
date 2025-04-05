const assetsModules = import.meta.glob(
    "../../../assets/**/*.{png,svg,jpg,jpeg,gif,webp,bmp}",
    {
        eager: true,
    }
);
type AssetModule = { default?: string } | Record<string, string>;
type AssetsObject = Record<string, string>;
export const assets: AssetsObject = Object.keys(assetsModules).reduce(
    (acc, path) => {
        const fileNameMatch = path.match(/([^/]+)(?=\.\w+$)/);
        if (!fileNameMatch) {
            console.warn(`Invalid file path: ${path}`);
            return acc;
        }
        const fileName = fileNameMatch[0];
        const module = assetsModules[path] as AssetModule;
        const assetValue =
            module.default || Object.values(module)[0] || "";
        acc[fileName] = assetValue;
        return acc;
    },
    {} as AssetsObject
);