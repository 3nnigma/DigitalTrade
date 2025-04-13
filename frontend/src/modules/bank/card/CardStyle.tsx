import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/inputs/input";
import { Button } from "@/components/ui/buttons/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/inputs/radioGroup";
import { Upload, Trash2 } from "lucide-react";
import { useCardStore } from "./helpers/store";

// Preset theme options for each card type
const colorPresets = {
  standard: [
    { name: "Default", color: "#0f172a" },
    { name: "Ocean", color: "#0ea5e9" },
    { name: "Forest", color: "#22c55e" },
  ],
  gold: [
    { name: "Classic Gold", color: "#ca8a04" },
    { name: "Gold Gradient", gradient: "linear-gradient(135deg, #f59e0b, #92400e)" },
    { name: "Platinum", color: "#94a3b8" },
  ],
  premium: [
    { name: "Royal Purple", color: "#7e22ce" },
    { name: "Premium Dark", color: "#1e293b" },
    { name: "Sunset", gradient: "linear-gradient(135deg, #f43f5e, #d946ef)" },
  ],
  black: [
    { name: "Matte Black", color: "#020617" },
    { name: "Carbon", color: "#171717" },
    { name: "Obsidian", gradient: "linear-gradient(135deg, #000000, #27272a)" },
  ],
};

interface CardStyleFormProps {
  form: UseFormReturn<any>;
}

export default function CardStyleForm({ form }: CardStyleFormProps) {
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { card } = useCardStore();

  const cardType = form.watch("cardType") || "standard";
  const presets = colorPresets[cardType as keyof typeof colorPresets];

  const handlePresetSelect = (preset: any) => {
    setSelectedPreset(preset.name);
    form.setValue("backgroundColor", preset.color || "");
    form.setValue("backgroundImage", "");
    setImagePreview(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target?.result as string;
      setImagePreview(imageUrl);
      form.setValue("backgroundImage", imageUrl);
      form.setValue("backgroundColor", "");
      setSelectedPreset(null);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    form.setValue("backgroundImage", "");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium">Color Presets</h3>
              <RadioGroup
                className="grid grid-cols-3 gap-3"
                value={selectedPreset || ""}
                onValueChange={() => {}}
              >
                {presets.map((preset: any) => (
                  <div key={preset.name}>
                    <RadioGroupItem
                      value={preset.name}
                      id={`preset-${preset.name}`}
                      className="sr-only"
                      checked={selectedPreset === preset.name}
                      onSelect={() => handlePresetSelect(preset)}
                    />
                    <label
                      htmlFor={`preset-${preset.name}`}
                      className="flex flex-col items-center justify-center h-20 p-2 space-y-2 cursor-pointer border rounded-md hover:border-primary"
                      onClick={() => handlePresetSelect(preset)}
                    >
                      <div
                        className="w-full h-10 rounded-md border"
                        style={preset.gradient
                          ? { backgroundImage: preset.gradient }
                          : { backgroundColor: preset.color }
                        }
                      />
                      <span className="text-xs">{preset.name}</span>
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium">Custom Color</h3>
              <FormField
                control={form.control}
                name="backgroundColor"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 border rounded-md"
                        style={{ backgroundColor: field.value || "#000000" }}
                      />
                      <FormControl>
                        <Input
                          type="color"
                          {...field}
                          value={field.value || "#000000"}
                          onChange={(e) => {
                            field.onChange(e);
                            setSelectedPreset(null);
                            form.setValue("backgroundImage", "");
                            setImagePreview(null);
                          }}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-medium">Custom Background Image</h3>
              <div className="flex flex-col gap-3">
                {imagePreview ? (
                  <div className="relative h-40 rounded-md overflow-hidden">
                    <img
                      src={imagePreview}
                      alt="Card background"
                      className="object-cover w-full h-full"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={removeImage}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-40 border-2 border-dashed rounded-md border-muted-foreground/25">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-8 h-8 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Drag & drop or click to upload
                      </p>
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={() => document.getElementById("image-upload")?.click()}
                      >
                        Select Image
                      </Button>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }
