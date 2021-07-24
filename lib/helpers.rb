module Helpers
  def markdown(text=nil)
    text ||= yield
    # return Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, tables: true).render(text)
  end

  def load_problems(name=nil, folder=nil)
    name ||= "problemes"
    folder ||= data.problemes

    if !folder.is_a?(Hash)
      return {}

    elsif folder.key?("name")
      dir_path = "data/#{name}"
      if File.directory?(dir_path)
        testnames = Set[]
        Dir.new(dir_path).select {|file| File.file?("#{dir_path}/#{file}")}.each {|file| testnames.add(File.basename(file,File.extname(file)))}
        testnames.each do |file|
          file_path = "#{dir_path}/#{file}"
          folder.tests ||= Hashie::Array.new()
          test_hash = Middleman::Util::EnhancedHash.new()
          test_hash['name'] = file
          test_hash['input'] = File.file?("#{file_path}.in") ? File.read("#{file_path}.in") : ""
          test_hash['output'] = File.file?("#{file_path}.out") ? File.read("#{file_path}.out") : ""
          folder.tests << test_hash
        end
      end
      return {"#{name}": folder}

    else
      problems = {}
      folder.each do |key, obj|
        load_problems("#{name}/#{key}", obj).each do |problem_key, problem_obj|
          problems[problem_key] = problem_obj
        end
      end
      return problems
    end
  end
end
