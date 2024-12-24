import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CVForm = ({ generalInfo, education, experience, onChange }) => {
  <div>
    <section>
      <h2>General Information :- </h2>
      <div>
        <Input
          placeholder="Enter Your FullName"
          value={generalInfo.name}
          onChange={(event) =>
            onChange("generalInfo", "name", event.target.value)
          }
        />

        <Input
          //type='email'
          placeholder="Enter Your Email Address"
          value={generalInfo.email}
          onChange={(event) =>
            onChange("generalInfo", "email", event.target.value)
          }
        />

        <Input
          placeholder="Enter Your Phone Number"
          value={generalInfo.phone}
          onChange={(event) =>
            onChange("generalInfo", "phone", event.target.value)
          }
        />
      </div>
    </section>
  </div>;
};
