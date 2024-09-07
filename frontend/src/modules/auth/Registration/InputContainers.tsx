import { Label } from "../components/label";
import { LabelInputContainer } from "../components/labelInputContainer";
import { Input } from "../components/input";
export const InputContainers = ({ register }: any) => {
  return (
    <>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="first_name">First name</Label>
          <Input
            id="first_name"
            placeholder="John"
            type="text"
            {...register("first_name", { required: true })}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="last_name">Last name</Label>
          <Input
            id="last_name"
            placeholder="Brown"
            type="text"
            {...register("last_name", { required: true })}
          />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="example@gmail.com"
          type="email"
          {...register("email", { required: true })}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="••••••••"
          type="password"
          {...register("password", { required: true })}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-8">
        <Label htmlFor="re_password">Confirm Password</Label>
        <Input
          id="re_password"
          placeholder="••••••••"
          type="password"
          {...register("re_password", { required: true })}
        />
      </LabelInputContainer>
    </>
  );
};
